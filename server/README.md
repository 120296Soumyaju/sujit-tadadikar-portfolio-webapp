# Email Server for Portfolio Contact Form

This is a simple Express server that handles sending emails from the portfolio contact form using Nodemailer.

## Setup Instructions

1. Create a `.env` file in this directory with the following variables:

```
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

2. For `EMAIL_PASS`, you need to create an App Password in your Google account:

   - Go to your Google Account > Security
   - Enable 2-Step Verification if not already enabled
   - Create an App Password (select "Mail" as the app and "Other" as the device)
   - Use the generated 16-character password as your EMAIL_PASS

3. Install the dependencies:

```
npm install
```

4. Start the server:

```
node index.js
```

## Important Notes

- The server needs to be running for the contact form to work
- Make sure CORS is properly configured if you're hosting the frontend on a different domain
- For production, consider using a more secure email service or a transactional email API
