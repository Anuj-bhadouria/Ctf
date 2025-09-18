export default function handler(req, res) {
    const { code } = req.query;

    // Read flag from Vercel ENV
    const FLAG = process.env.CTF_FLAG;

    if(Number(code) === 861){  // matches secretCode
        res.status(200).json({ flag: FLAG });
    } else {
        res.status(403).json({ flag: "Wrong code!" });
    }
}
