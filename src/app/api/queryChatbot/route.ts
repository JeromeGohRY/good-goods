import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
// import path from 'path';
// import { JSONLoader } from "langchain/document_loaders/fs/json";
// Define type for social enterprise data
interface Enterprise {
    "ID": number, 
    "Enterprise Name": string;
    "URL Param": string;
    "Enterprise picture relative path": string;
    "Type of impact": string[];
    "Detailed impact": string;
    "Story": string;
    "Story picture relative path": string;
    "Format": string[];
    "Location": string[];
    "Region": string[];
    "Type of goods offered": string[];
    "Opening hours": string[];
    "Website": string;
    "logo image": string;
}

// const loader = new JSONLoader(
//     path.join(process.cwd(), 'public', 'data', 'social_enterprises.json'), // Path to social enterprises data
//     ["/ID", "/Enterprise Name", "/Location", "/Type of goods offered", "/Format"]
// );
// Temporarily read from file, but may obtain from MongoDB instead

export const dynamic = 'force-dynamic';

const TEMPLATE = `Answer the user's questions about social enterprises based only on the following context. Give the enterprises that apply
 by returning a list [ID1,ID2,...] where the IDs(which are numbers) are the IDs of the social enterprises that apply. Example: ID of Charitable Eats is 6.
 If the answer is not in the context, reply politely that you do not have that information available.:
==============================
Context: {context}
==============================
User: {question}
Assistant:`;




export async function POST(req: Request) {

        // Extract the question from the request body
        const { question } = await req.json();
        // console.log(path.join(process.cwd(), 'public', 'data', 'social_enterprises.json'))
        // const docs = await loader.load() as unknown as Enterprise[]; 
        const docs = [
            {
                "ID": 1,
                "Enterprise Name": "Charitable Eats",
                "URL Param": "",
                "Enterprise picture relative path": "", 
                "Type of impact": ["Provision of basic human needs", "Provision of products and services to improve the mental health & well-being"], 
                "Detailed impact": "Blind Spots was founded by visionary entrepreneur Clair Voyant, who believed that the phrase “you can’t judge a driver by their vision” should be taken literally. After years of hearing that blind people couldn’t become taxi drivers, Clair said, “Hold my cane!” and launched Blind Spots—the world’s first taxi service run entirely by blind drivers.\nWith the motto, “Who needs sight when you’ve got insight?” Blind Spots empowers blind individuals to take the wheel (quite literally), challenging the norms of what it means to be a driver. The cars are equipped with cutting-edge Tactile Guidance Systems (TGS), combining advanced AI, sonar, and haptic feedback to help drivers feel the road. The technology provides subtle vibrations on the steering wheel and floor mats, guiding drivers around obstacles, traffic, and pedestrians like a real-life game of Marco Polo—only way safer!", 
                "Story": "Gary Johnson had always dreamed of driving, despite being blind from birth. When he discovered Blind Spots, a taxi service for blind drivers using cutting-edge Tactile Guidance Systems (TGS), his life changed. After completing the intensive training, Gary became a certified driver, mastering the art of navigating through vibrations and sound cues. His first passenger, initially doubtful, was blown away by Gary's skill and humor, especially when he took a smooth detour through city traffic, proving that sight wasn’t necessary to be a great driver.\nGary quickly gained a reputation as the go-to driver in town, offering not just rides, but inspiration. His car became a beacon of hope, particularly for other blind individuals, showing them that limitations were just in the mind. Today, Gary is a local legend, using his driving skills and humor to inspire others to challenge what’s possible—one ride at a time.", 
                "Story picture relative path": "/images/stories/story1.jpg", 
                "Format": ["Physical", "Online"], 
                "Location": ["3155 Commonwealth Ave W #05-16/17 Singapore 129588", "200 Victoria Street #04-06 Singapore 188021"], 
                "Region": ["North", "South", "East", "West", "North-East", "North-West", "South-East", "South-West"], 
                "Type of goods offered": ["Taxi services", "Food delivery", "hahahahahhahahahhahahhahahahhaah", "Driving Lessons", "White Canes", "Guide Dogs", "Sunglasses"],
                "Opening hours": ["00:00 - 23:59", "08:00 - 20:00"], 
                "Website": "https://www.eighteenchefs.com/",
                "logo image": "/assets/brands/teaideas.webp"
                
            },
            {
                "ID": 2, 
                "Enterprise Name": "18 Chefs", 
                "URL Param": "blind_spots", 
                "Enterprise picture relative path": "/images/enterprises/enterprise1.jpg",
                "Type of impact": ["Provision of employment opportunities", "Provision of skill development"], 
                "Detailed impact": "Blind Spots was founded by visionary entrepreneur Clair Voyant, who believed that the phrase “you can’t judge a driver by their vision” should be taken literally. After years of hearing that blind people couldn’t become taxi drivers, Clair said, “Hold my cane!” and launched Blind Spots—the world’s first taxi service run entirely by blind drivers.\nWith the motto, “Who needs sight when you’ve got insight?” Blind Spots empowers blind individuals to take the wheel (quite literally), challenging the norms of what it means to be a driver. The cars are equipped with cutting-edge Tactile Guidance Systems (TGS), combining advanced AI, sonar, and haptic feedback to help drivers feel the road. The technology provides subtle vibrations on the steering wheel and floor mats, guiding drivers around obstacles, traffic, and pedestrians like a real-life game of Marco Polo—only way safer!", 
                "Story": "Gary Johnson had always dreamed of driving, despite being blind from birth. When he discovered Blind Spots, a taxi service for blind drivers using cutting-edge Tactile Guidance Systems (TGS), his life changed. After completing the intensive training, Gary became a certified driver, mastering the art of navigating through vibrations and sound cues. His first passenger, initially doubtful, was blown away by Gary's skill and humor, especially when he took a smooth detour through city traffic, proving that sight wasn’t necessary to be a great driver.\nGary quickly gained a reputation as the go-to driver in town, offering not just rides, but inspiration. His car became a beacon of hope, particularly for other blind individuals, showing them that limitations were just in the mind. Today, Gary is a local legend, using his driving skills and humor to inspire others to challenge what’s possible—one ride at a time.", 
                "Story picture relative path": "/images/stories/story1.jpg", 
                "Format": ["Physical", "Online"], 
                "Location": ["3155 Commonwealth Ave W #05-16/17 Singapore 129588", "200 Victoria Street #04-06 Singapore 188021"], 
                "Region": ["North", "South", "East", "West", "North-East", "North-West", "South-East", "South-West"], 
                "Type of goods offered": ["Taxi services", "Food delivery", "hahahahahhahahahhahahhahahahhaah", "Driving Lessons", "White Canes", "Guide Dogs", "Sunglasses"],
                "Opening hours": ["00:00 - 23:59", "08:00 - 20:00"], 
                "Website": "https://www.eighteenchefs.com/",
                "logo image": "/assets/brands/eighteen.png"
            }, 
            {
                "ID": 3, 
                "Enterprise Name": "Sock exchange", 
                "URL Param": "sock_exchange", 
                "Enterprise picture relative path": "", 
                "Type of impact": ["Provision of basic human needs", "Provision of products and services to improve the mental health & well-being"], 
                "Detailed impact": "In a world where lost socks have devastated laundry rooms and left countless feet unpaired, a group of visionaries saw an opportunity. Enter Sock Exchange—the world's first non-profit organization dedicated to reuniting lost socks with their long-lost partners.\nIt all started when the founder, Cotton von Woolworth, lost his favorite sock in a tragic dryer accident. Heartbroken and cold-footed, he vowed that no sock would ever be abandoned again. His team of Sock Brokers now operates globally, working day and night to find lonely socks and match them with compatible partners. Using cutting-edge AI and blockchain technology, Sock Exchange guarantees that every sock has a sole-mate.", 
                "Story": "Meet Linda, a busy mom of three who had a lifelong problem: her socks kept mysteriously disappearing in the laundry. No matter how hard she tried, she’d always end up with mismatched pairs, leading to a drawer full of lonely, single socks. One day, while venting her frustration to a friend, she heard about Sock Exchange, the revolutionary social enterprise dedicated to reuniting lost socks with their partners.\nSkeptical but desperate, Linda decided to give it a try. She sent in a bag of her mismatched socks, and within a week, she received an exciting notification: Sock Exchange had found matches for three of her favorite missing socks! Not only that, but they turned the remaining unmatched socks into quirky sock puppets for her kids. Linda couldn't believe it—what started as a laundry nightmare ended in sock harmony, and her kids loved the unexpected bonus. Thanks to Sock Exchange, she now has peace of mind knowing that no sock will ever be left behind again!", 
                "Story picture relative path": "", 
                "Format": ["Online"], 
                "Location": [], 
                "Region": [], 
                "Type of goods offered": ["Socks", "Shoes", "Charcoal shoe deodorizers", "Long legged socks", "Spikes"], 
                "Opening hours": [], 
                "Website": "https://www.google.com",
                "logo image": "/assets/brands/boxgreen.webp"
            }
        ]
        // Hardcoded docs
        

        // Create the context string from the loaded data
        const context = docs.map((doc: Enterprise) => {
            return `KEY ${doc['ID']}: ${doc['Enterprise Name']} is located in ${doc['Location']}, offers ${doc['Type of goods offered']} and is a ${doc['Format']}.`;
        }).join('\n');
        

        // Create the prompt using the TEMPLATE and context
        const prompt = PromptTemplate.fromTemplate(TEMPLATE);
        const formattedPrompt = await prompt.format({ context, question });
        console.log("Formatted Prompt:", formattedPrompt);
        
        const model = new ChatOpenAI({
            apiKey: process.env.OPENAI_API_KEY!,
            model: 'gpt-3.5-turbo', //Can choose better model
            temperature: 0,
        });

        // Prepare the input for the model
        console.log(question)
        const messages = [
            { role: 'system', content: formattedPrompt},
            { role: 'user', content: question }
        ];

        // Call the model with the correctly formatted messages
        const response = await model.call(messages);

        return Response.json({ answer: response.content }, { status: 200 });
}

