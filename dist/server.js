"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const bookRoute_1 = __importDefault(require("./routes/bookRoute"));
const authorRoute_1 = __importDefault(require("./routes/authorRoute"));
const memberRoute_1 = __importDefault(require("./routes/memberRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/books', bookRoute_1.default);
app.use('/authors', authorRoute_1.default);
app.use('/members', memberRoute_1.default);
const port = 3000;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
app.get('/', (req, res) => {
    res.send('Welcome to the library of Hell!');
});
