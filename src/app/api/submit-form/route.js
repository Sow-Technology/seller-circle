import mongoose from 'mongoose';
import axios from 'axios';
import Form from '@/models/Form';

const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

const sendToZohoCRM = async (data) => {
  try {
    await axios.post('https://www.zohoapis.com/crm/v2/Leads', {
      data: {
        Full_Name: data.fullName,
        Email: data.workEmail,
        Phone: data.phoneNumber,
        Brand_Name: data.brandName,
        Service: data.service,
        Service2: data.service2,
        Message: data.message
      }
    }, {
      headers: {
        'Authorization': `Zoho-oauthtoken ${process.env.ZOHO_OAUTH_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error sending data to Zoho CRM:', error);
    throw new Error('Error sending data to Zoho CRM');
  }
};

export default async function POST(req, res) {
  if (req.method === 'POST') {
    try {
      await connectToDatabase();
      
      const formData = req.body;

      // Create and save form data in MongoDB
      const newForm = new Form(formData);
      await newForm.save();
      
      // Send data to Zoho CRM
      await sendToZohoCRM(formData);
      
      res.status(200).json({ message: 'Form data successfully submitted!' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
