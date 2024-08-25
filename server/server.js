import express from 'express';
import pg from 'pg';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 8000;

// PostgreSQL connection configuration
const pool = new pg.Pool({
  connectionString: "postgres://default:7lFSArD5LBwX@ep-lingering-star-a4wogfq9-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
});

// Middleware setup
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Ensure you can parse JSON bodies



app.get("/" , async (req,res)=>{
    try{
        const result = await pool.query('SELECT * FROM products');
        res.status(200).send(result.rows)
    }catch(err){
        console.log(err.stack);
    }
})


// Route for adding a product
app.post('/api/products', async (req, res) => {
  const { name, usage, price, img } = req.body;
  
  try {
    const result = await pool.query(
      'INSERT INTO products(name, usage, price, image_url) VALUES($1, $2, $3, $4) RETURNING *',
      [name, usage, price, img]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).send('Server error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
