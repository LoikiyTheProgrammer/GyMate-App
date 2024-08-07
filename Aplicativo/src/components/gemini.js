const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv  = require("dotenv")
dotenv.config()
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    
    const prompt = "Oi"
    
    const result = await model.generateContentStream([prompt]);
    for await(const chunk of result.stream){
        const chunkText = chunk.text();
        console.log(chunkText)
    }
}

run();