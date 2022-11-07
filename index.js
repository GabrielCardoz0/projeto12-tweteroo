import express from "express";
import cors from "cors"


const listaTweets = [
  {
    username: "bobesponja",
    tweet: "tweet 1",
    avatar:"https://i.pinimg.com/736x/7e/fd/b9/7efdb9a91e301381f2d8f6ec83201f94.jpg"
  },
  {
    username: "bobesponja",
    tweet: "tweet 2",
    avatar:"https://i.pinimg.com/736x/7e/fd/b9/7efdb9a91e301381f2d8f6ec83201f94.jpg"
  },
  {
    username: "bobesponja",
    tweet: "tweet 3",
    avatar:"https://i.pinimg.com/736x/7e/fd/b9/7efdb9a91e301381f2d8f6ec83201f94.jpg"
  },
  {
    username: "bobesponja",
    tweet: "tweet 4",
    avatar:"https://i.pinimg.com/736x/7e/fd/b9/7efdb9a91e301381f2d8f6ec83201f94.jpg"
  },
  {
    username: "patrick",
    tweet: "tweet 5",
    avatar:"https://i.pinimg.com/736x/7e/fd/b9/7efdb9a91e301381f2d8f6ec83201f94.jpg"
  },
  {
    username: "bobesponja",
    tweet: "tweet 6",
    avatar:"https://i.pinimg.com/736x/7e/fd/b9/7efdb9a91e301381f2d8f6ec83201f94.jpg"
  },
  {
    username: "bobesponja",
    tweet: "tweet 7",
    avatar:"https://i.pinimg.com/736x/7e/fd/b9/7efdb9a91e301381f2d8f6ec83201f94.jpg"
  },
  {
    username: "bobesponja",
    tweet: "tweet 8",
    avatar:"https://i.pinimg.com/736x/7e/fd/b9/7efdb9a91e301381f2d8f6ec83201f94.jpg"
  },
  {
    username: "bobesponja",
    tweet: "tweet 9",
    avatar:"https://i.pinimg.com/736x/7e/fd/b9/7efdb9a91e301381f2d8f6ec83201f94.jpg"
  },
  {
    username: "patrick",
    tweet: "tweet 10",
    avatar:"https://i.pinimg.com/736x/7e/fd/b9/7efdb9a91e301381f2d8f6ec83201f94.jpg"
  },
];

const listaUsers = [
    {
        username: "bobesponja", 
        avatar: "oloooa" 
    }
];

const app = express();
app.use(express.json());
app.use(cors())



app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;

  console.log(req.route.methods);

  const userSign = {
    username: username,
    avatar: avatar,
  };

  listaUsers.push(userSign);

  res.send(listaUsers);
});


app.route("/tweets")

.get((req,res) =>{
    const arr = []

    for(let i = 0; i < 10; i++){
        arr.push(listaTweets[listaTweets.length - 1 -i])
    }

    res.send(arr)
})

.post((req, res) => {
    const {username, tweet} = req.body

    const userOBJ = listaUsers.find((n) => n.username === username)

    const newTweet ={
        username: username,
        tweet:tweet,
        avatar:userOBJ.avatar
    } 

    listaTweets.push(newTweet)

    console.log(listaTweets)

    res.send("OK")
})


app.listen(5000, () => {
  console.log("Olá, estou ouvindo aqui doido");
});


