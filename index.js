import express from "express";
import {join, dirname} from "path";
import { fileURLToPath } from "url";


//Routes
import indexRoutes from "./src/routes/index.js";

// Initialize express
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//settings
app.set("port", process.env.PORT || 3000);
app.set("views", join(__dirname, "src/views"));
app.set("view engine", "ejs");

// Routes
app.use(indexRoutes);

//staticFiles
app.use(express.static(join(__dirname, "src/public")));

//listening the server
app.listen(app.get("port"))
console.log("server on port", app.get("port"));