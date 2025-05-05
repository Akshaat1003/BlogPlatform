const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Blog Generation Endpoint
app.post('/generate', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/google/flan-t5-large',
      {
        inputs: `Write a detailed blog post about: ${prompt}`,
        parameters: {
          max_new_tokens: 250,     
          temperature: 0.7         
        }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`
        },
        timeout: 60000
      }
    );

    const generated = response.data?.[0]?.generated_text || "No blog content generated.";
    res.json({ response: generated });

  } catch (error) {
    console.error("Hugging Face API Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to generate blog content." });
  }
});

// Server Start
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Blog generation server running at http://localhost:${PORT}`);
});
