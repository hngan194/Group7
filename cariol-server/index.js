// const express = require('express'); 
// const app = express(); 
// const port = 3002; 
// const morgan=require("morgan") 
// app.use(morgan("combined")) 
// const bodyParser=require("body-parser") 
// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({extended: true})); 
// const cors=require("cors"); 
// app.use(cors()) 
// app.listen(port,()=>{ 
// console.log(`My Server listening on port ${port}`) 
// }) 
// app.get("/",(req,res)=>{ 
// res.send("This Web server is processed for MongoDB") 
// }) 
// const { MongoClient, ObjectId } = require('mongodb'); 
// client = new MongoClient("mongodb+srv://ngannh22411c:RqiRhKKhKcSUhEiX@group7.zpydo.mongodb.net/"); 
// client.connect(); 
// database = client.db("cariol");       
// productsCollection = database.collection("products");
// app.get("/products",cors(),async (req,res)=>{    
//     const result = await productsCollection.find({}).toArray(); 
//     res.send(result) 
//     } 
//     )
// blogsCollection = database.collection("blogs");
// app.get("blogs",cors(),async (req,res)=>{    
//     const result = await blogsCollection.find({}).toArray(); 
//     res.send(result) 
//     } 
//     )

//     const authRoutes = require("./routes/authRoutes");
// app.use("/auth", authRoutes);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = 3002;

// Middleware
app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

<<<<<<< HEAD
// Kết nối MongoDB
const mongoUri = "mongodb+srv://ngannh22411c:RqiRhKKhKcSUhEiX@group7.zpydo.mongodb.net/";
const client = new MongoClient(mongoUri);

client.connect()
  .then(() => {
    console.log("Connected to MongoDB");
    const database = client.db("cariol");
    const productsCollection = database.collection("products");
    const blogsCollection = database.collection("blogs");

    // API để lấy danh sách sản phẩm
    app.get("/products", async (req, res) => {
      try {
        const result = await productsCollection.find({}).toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send("Error retrieving products");
      }
    });

    // API để lấy danh sách blog
    app.get("/blogs", async (req, res) => {
      try {
        const result = await blogsCollection.find({}).toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send("Error retrieving blogs");
      }
    });
    app.get("/blogs/:id", async (req, res) => {
      const blogId = req.params.id;
      try {
        const blog = await blogsCollection.findOne({ _id: new ObjectId(blogId) });
        if (blog) {
          // Chuyển đổi _id từ ObjectId thành chuỗi để dễ sử dụng trong frontend
          blog._id = blog._id.toString();
          res.send(blog);
        } else {
          res.status(404).send({ message: "Blog not found" });
        }
      } catch (error) {
        res.status(500).send("Error retrieving blog");
      }
    });
    

    // Khởi động server sau khi kết nối thành công
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
=======
// Kết nối MongoDB bằng Mongoose
mongoose
  .connect("mongodb+srv://ngannh22411c:RqiRhKKhKcSUhEiX@group7.zpydo.mongodb.net/cariol", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42
  })
  .then(() => console.log("✅ Kết nối MongoDB thành công!"))
  .catch((err) => console.log("❌ Lỗi kết nối MongoDB:", err));

// Kiểm tra server chạy
app.get("/", (req, res) => {
  res.send("This Web server is processed for MongoDB");
});

// Import Routes
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

// **🟢 API LẤY DANH SÁCH SẢN PHẨM (PRODUCTS)**
const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    image: String,
  })
);

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error: error.message });
  }
});

// **🟢 API LẤY DANH SÁCH BÀI VIẾT BLOGS**
const Blog = mongoose.model(
  "Blog",
  new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    createdAt: { type: Date, default: Date.now },
  })
);

app.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error: error.message });
  }
});

// Chạy server
app.listen(port, () => {
  console.log(`🚀 Server chạy trên cổng ${port}`);
});
