import axios from 'axios';
import { NextResponse } from "next/server";
export async function POST(req, res) {
    const {email} = await req.json();

    if (!email || !email.length) {
        return NextResponse.json({ error: 'Email is required' })
      }
    
      const API_KEY = process.env.MAILCHIMP_API_KEY
      const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
      const API_SERVER = process.env.MAILCHIMP_API_SERVER
      
      const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`
    
      const data = {
        email_address: email,
        status: 'subscribed'
      }
    
      const options = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `api_key ${API_KEY}`
        }
      }
    
      try {
        const response = await axios.post(url, data, options)
        if (response.status >= 400) {
          return NextResponse.json({
            error: `There was an error subscribing to the newsletter. Shoot me an email at jackmateo@gmail and I'll add you to the list.`
          })
        }
        return NextResponse.json({ message: 'success' })
      } catch (error) {
        return NextResponse.json({ error: error.message })
      }
}