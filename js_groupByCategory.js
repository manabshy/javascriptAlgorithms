const questions = [
{
"id": "sign-up-form",
"name": "Sign-Up Form",
"category": "HTML"
},
{
"id": "item-cart",
"name": "Item Cart",
"category": "HTML"
},
{
"id": "spaghetti-recipe",
"name": "Spaghetti Recipe",
"category": "HTML"
},
{
"id": "blog-post",
"name": "Blog Post",
"category": "HTML"
},
{
"id": "rainbow-circles",
"name": "Rainbow Circles",
"category": "CSS"
},
{
"id": "navbar",
"name": "Navbar",
"category": "CSS"
},
{
"id": "pig-emoji",
"name": "Pig Emoji",
"category": "CSS"
},
{
"id": "purchase-form",
"name": "Purchase Form",
"category": "CSS"
},
{
"id": "algoexpert-products",
"name": "AlgoExpert Products",
"category": "CSS"
},

];

const questionsByCategory = {}
questions.forEach(({ category, ...question }) => {
  if (!questionsByCategory.hasOwnProperty(category)) {
    questionsByCategory[category] = [];
  }
  questionsByCategory[category].push(question)
})
questionsByCategory

const categories = Object.keys(questionsByCategory);

categories


const submissions = [
{
"questionId": "blog-post",
"status": "CORRECT"
},
{
"questionId": "throttle",
"status": "INCORRECT"
},
{
"questionId": "stopwatch",
"status": "PARTIALLY_CORRECT"
},
{
"questionId": "pig-emoji",
"status": "CORRECT"
},
{
"questionId": "todo-list",
"status": "CORRECT"
},
{
"questionId": "testing-framework",
"status": "CORRECT"
}
]

const submissionsByQuestion = {}
submissions.forEach(({ questionId, status }) => {
    submissionsByQuestion[questionId] = status
})
submissionsByQuestion



