import express from 'express';
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
let today = new Date();
const year = today.getFullYear();


let blogs = [
    {
  id:1 , // unique ID //Date.now() JavaScript me current timestamp in milliseconds return karta hai.
  title: `Good Writing`,
  content: `
  May 2025

There are two senses in which writing can be good: it can sound good, and the ideas can be right. It can have nice, flowing sentences, and it can draw correct conclusions about important things. It might seem as if these two kinds of good would be unrelated, like the speed of a car and the color it's painted. And yet I don't think they are. I think writing that sounds good is more likely to be right.

So here we have the most exciting kind of idea: one that seems both preposterous and true. Let's examine it. How can this possibly be true?

I know it's true from writing. You can't simultaneously optimize two unrelated things; when you push one far enough, you always end up sacrificing the other. And yet no matter how hard I push, I never find myself having to choose between the sentence that sounds best and the one that expresses an idea best. If I did, it would be frivolous to care how sentences sound. But in practice it feels the opposite of frivolous. Fixing sentences that sound bad seems to help get the ideas right. [1]

By right I mean more than just true. Getting the ideas right means developing them well — drawing the conclusions that matter most, and exploring each one to the right level of detail. So getting the ideas right is not just a matter of saying true things, but saying the right true things.

How could trying to make sentences sound good help you do that? The clue to the answer is something I noticed 30 years ago when I was doing the layout for my first book. Sometimes when you're laying out text you have bad luck. For example, you get a section that runs one line longer than the page. I don't know what ordinary typesetters do in this situation, but what I did was rewrite the section to make it a line shorter. You'd expect such an arbitrary constraint to make the writing worse. But I found, to my surprise, that it never did. I always ended up with something I liked better.

I don't think this was because my writing was especially careless. I think if you pointed to a random paragraph in anything written by anyone and told them to make it slightly shorter (or longer), they'd probably be able to come up with something better.

The best analogy for this phenomenon is when you shake a bin full of different objects. The shakes are arbitrary motions. Or more precisely, they're not calculated to make any two specific objects fit more closely together. And yet repeated shaking inevitably makes the objects discover brilliantly clever ways of packing themselves. Gravity won't let them become less tightly packed, so any change has to be a change for the better. [2]

So it is with writing. If you have to rewrite an awkward passage, you'll never do it in a way that makes it less true. You couldn't bear it, any more than gravity could bear things floating upward. So any change in the ideas has to be a change for the better.

It's obvious once you think about it. Writing that sounds good is more likely to be right for the same reason that a well-shaken bin is more likely to be tightly packed. But there's something else going on as well. Sounding good isn't just a random external force that leaves the ideas in an essay better off. It actually helps you to get them right.

The reason is that it makes the essay easier to read. It's less work to read writing that flows well. How does that help the writer? Because the writer is the first reader. When I'm working on an essay, I spend far more time reading than writing. I'll reread some parts 50 or 100 times, replaying the thoughts in them and asking myself, like someone sanding a piece of wood, does anything catch? Does anything feel wrong? And the easier the essay is to read, the easier it is to notice if something catches.

So yes, the two senses of good writing are connected in at least two ways. Trying to make writing sound good makes you fix mistakes unconsciously, and also helps you fix them consciously; it shakes the bin of ideas, and also makes mistakes easier to see. But now that we've dissolved one layer of preposterousness, I can't resist adding another. Does sounding good do more than just help you get the ideas right? Is writing that sounds good inherently more likely to be right? Crazy as it may seem, I think that's true too.

Obviously there's a connection at the level of individual words. There are lots of words in English that sound like what they mean, often in wonderfully subtle ways. Glitter. Round. Scrape. Prim. Cavalcade. But the sound of good writing depends even more on the way you put words together, and there's a connection at that level too.

When writing sounds good, it's mostly because it has good rhythm. But the rhythm of good writing is not the rhythm of music, or the meter of verse. It's not so regular. If it were, it wouldn't be good, because the rhythm of good writing has to match the ideas in it, and ideas have all kinds of different shapes. Sometimes they're simple and you just state them. But other times they're more subtle, and you need longer, more complicated sentences to tease out all the implications.

An essay is a cleaned up train of thought, in the same way dialogue is cleaned up conversation, and a train of thought has a natural rhythm. So when an essay sounds good, it's not merely because it has a pleasing rhythm, but because it has its natural one. Which means you can use getting the rhythm right as a heuristic for getting the ideas right. And not just in principle: good writers do both simultaneously as a matter of course. Often I don't even distinguish between the two problems. I just think Ugh, this doesn't sound right; what do I mean to say here? [3]

The sound of writing turns out to be more like the shape of a plane than the color of a car. If it looks good, as Kelly Johnson used to say, it will fly well.

This is only true of writing that's used to develop ideas, though. It doesn't apply when you have ideas in some other way and then write about them afterward — for example, if you build something, or conduct an experiment, and then write a paper about it. In such cases the ideas often live more in the work than the writing, so the writing can be bad even though the ideas are good. The writing in textbooks and popular surveys can be bad for the same reason: the author isn't developing the ideas, merely describing other people's. It's only when you're writing to develop ideas that there's such a close connection between the two senses of doing it well.

Ok, many people will be thinking, this seems plausible so far, but what about liars? Is it not notoriously possible for a smooth-tongued liar to write something beautiful that's completely false?

It is, of course. But not without method acting. The way to write something beautiful and false is to begin by making yourself almost believe it. So just like someone writing something beautiful and true, you're presenting a perfectly-formed train of thought. The difference is the point where it attaches to the world. You're saying something that would be true if certain false premises were. If for some bizarre reason the number of jobs in a country were fixed, then immigrants really would be taking our jobs.

So it's not quite right to say that better sounding writing is more likely to be true. Better sounding writing is more likely to be internally consistent. If the writer is honest, internal consistency and truth converge.

But while we can't safely conclude that beautiful writing is true, it's usually safe to conclude the converse: something that seems clumsily written will usually have gotten the ideas wrong too.

Indeed, the two senses of good writing are more like two ends of the same thing. The connection between them is not a rigid one; the goodness of good writing is not a rod but a rope, with multiple overlapping connections running through it. But it's hard to move one end without moving the other. It's hard to be right without sounding right.










Notes

[1] The closest thing to an exception is when you have to go back and insert a new point into the middle of something you've written. This often messes up the flow, sometimes in ways you can never quite repair. But I think the ultimate source of this problem is that ideas are tree-shaped and essays are linear. You inevitably run into difficulties when you try to cram the former into the latter. Frankly it's surprising how much you can get away with. But even so you sometimes have to resort to an endnote.

[2] Obviously if you shake the bin hard enough the objects in it can become less tightly packed. And similarly, if you imposed some huge external constraint on your writing, like using alternating one and two syllable words, the ideas would start to suffer.

[3] Bizarrely enough, this happened in the writing of this very paragraph. An earlier version shared several phrases in common with the preceding paragraph, and the repetition bugged me each time I reread it. When I got annoyed enough to fix it, I discovered that the repetition reflected a problem in the underlying ideas, and I fixed both simultaneously.



Thanks to Jessica Livingston and Courtenay Pipkin for reading drafts of this.`
},
{
    id:2,
    title:"The Shape of the Essay Field",
    content:`June 2025

An essay has to tell people something they don't already know. But there are three different reasons people might not know something, and they yield three very different kinds of essays.

One reason people won't know something is if it's not important to know. That doesn't mean it will make a bad essay. For example, you might write a good essay about a particular model of car. Readers would learn something from it. It would add to their picture of the world. For a handful of readers it might even spur some kind of epiphany. But unless this is a very unusual car it's not critical for everyone to know about it. [1]

If something isn't important to know, there's no answer to the question of why people don't know it. Not knowing random facts is the default. But if you're going to write about things that are important to know, you have to ask why your readers don't already know them. Is it because they're smart but inexperienced, or because they're obtuse?

So the three reasons readers might not already know what you tell them are (a) that it's not important, (b) that they're obtuse, or (c) that they're inexperienced.

The reason I did this breakdown was to get at the following fact, which might have seemed controversial if I'd led with it, but should be obvious now. If you're writing for smart people about important things, you're writing for the young.

Or more precisely, that's where you'll have the most effect. Whatever you say should also be at least somewhat novel to you, however old you are. It's not an essay otherwise, because an essay is something you write to figure something out. But whatever you figure out will presumably be more of a surprise to younger readers than it is to you.

There's a continuum of surprise. At one extreme, something you read can change your whole way of thinking. The Selfish Gene did this to me. It was like suddenly seeing the other interpretation of an ambiguous image: you can treat genes rather than organisms as the protagonists, and evolution becomes easier to understand when you do. At the other extreme, writing merely puts into words something readers were already thinking — or thought they were.

The impact of an essay is how much it changes readers' thinking multiplied by the importance of the topic. But it's hard to do well at both. It's hard to have big new ideas about important topics. So in practice there's a tradeoff: you can change readers' thinking a lot about moderately important things, or change it a little about very important ones. But with younger readers the tradeoff shifts. There's more room to change their thinking, so there's a bigger payoff for writing about important things.

The tradeoff isn't a conscious one, at least not for me. It's more like a kind of gravitational field that writers work in. But every essayist works in it, whether they realize it or not.

This seems obvious once you state it, but it took me a long time to understand. I knew I wanted to write for smart people about important topics. I noticed empirically that I seemed to be writing for the young. But it took me years to understand that the latter was an automatic consequence of the former. In fact I only really figured it out as I was writing this essay.

Now that I know it, should I change anything? I don't think so. In fact seeing the shape of the field that writers work in has reminded me that I'm not optimizing for returns in it. I'm not trying to surprise readers of any particular age; I'm trying to surprise myself.

The way I usually decide what to write about is by following curiosity. I notice something new and dig into it. It would probably be a mistake to change that. But seeing the shape of the essay field has set me thinking. What would surprise young readers? Which important things do people tend to learn late? Interesting question. I should think about that.







Note

[1] It's hard to write a really good essay about an unimportant topic, though, because a really good essayist will inevitably draw the topic into deeper waters. E. B. White could write an essay about how to boil potatoes that ended up being full of timeless wisdom. In which case, of course, it wouldn't really be about how to boil potatoes; that would just have been the starting point.



Thanks to Jessica Livingston and Michael Nielsen for reading drafts of this.`

}
];//database ki trh kaam krega



//home route______________________
app.get('/',(req,res)=>{
    res.render("home.ejs",{
        blogs: blogs , year:year}
    )
    // console.log(blogs[0].id);
})

//create form route___________________
app.get('/create',(req,res)=>{
    res.render("create.ejs",{year:year});
})

//create blog route_______________________
app.post('/create',(req,res)=>{
    if(!req.body.title||!req.body.content){
        res.send("<p>⚠️ Title aur Content is required</p>");
        res.render("create.ejs",{year:year});
    }
    const newBlog = {
        id: Date.now(),    // unique id
        title: req.body.title,
        content: req.body.content
    };
    blogs.push(newBlog); // array me new object add
    console.log(blogs);
    res.redirect('/');
})

//display single blog route________________
//req.params = URL ke andar jo dynamic value hai usko access karne ka tareeka.

app.get("/blogs/:id",(req,res)=>{
    const blogId = req.params.id;
    const blog = blogs.find((blog) => blog.id == blogId);
    if (!blog) {
        return res.send("Blog not found!");
    }
    res.render("blog.ejs", { blog: blog ,year:year});
})

app.get("/edit/:id",(req,res)=>{
    const blogId = req.params.id;
    const blog = blogs.find((blog) => blog.id == blogId);
    if (!blog) {
        return res.send("Blog not found!");
    }
    res.render("edit.ejs", { blog: blog ,year:year });
})
app.post("/edit/:id",(req,res)=>{
    const blogId = req.params.id;
    const blog = blogs.find((blog)=> blog.id == blogId);
    if (!blog) {
        return res.send("Blog not found!");
    }
    // Update title and content
    blog.title = req.body.title;
    blog.content = req.body.content;
    // Redirect to single blog page
    res.redirect(`/blogs/${blog.id}`);

})
app.post("/delete/:id",(req,res)=>{
    const blogId = req.params.id;

    // Array me se blog remove karo
    blogs = blogs.filter(blog => blog.id != blogId); //filter → naya array banata hai jisme deleted blog remove ho jata hai

    // Redirect home
    res.redirect('/');
})

app.listen(port,()=>{
    console.log(`Server is listening at port ${port}`);
})