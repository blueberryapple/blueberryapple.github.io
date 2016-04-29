---
layout: post
date: 2016-04-19 9:57:00 -0800
categories: latex
---
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

Throughout my first two years taking computer science and math courses,
there've been times when an instructors recommends using $$\LaTeX.$$ That
being said, a lot of students groan at the very words. Being the ambitious
freshman that I was last year, I tackled it head on. And I have to say that
latex does make your homework look a lot nicer and exactly how the 
textbooks typeset graphics and equations. Two of the most common graphics
that you'll have to create in computer science classes are graphs and trees
without a doubt. And today, I'll be showing you how to draw trees.

There are two packages that I recommend to draw trees:

1.  qtree
2.  tikz


<h2>qtree</h2>
The qtree package is probably the fastest way to draw trees in latex. If
you're ever in the situation where your homework is due in less than a day,
this is the package to use. The syntax is simple, a two level binary tree
drawn by qtree looks like this:

{% highlight latex %}
\Tree [.A B C ]
{% endhighlight %}

In this code, the . signifies the parent node. And B and C are the children.
Note the space between the last child, C, and the ending bracket. As with
most algorithms involving trees, to create subtrees, do this recursively.
This means to have a left subtree with B as the parent, the code looks like:

{% highlight latex %}
\Tree [.A [.B D E ] C ] % here we substituted B with [.B D E ]
{% endhighlight %}

As you can see, it requires very little code to draw it. Compared to
students who spend time drawing this up on Google Drawings, you can produce
and edit your trees much faster.


<h2>tikz</h2>
The tikz package it probably what most people use to draw graphs and trees,
and with good reason. It allows you a lot of customization that the qtree
doesn't offer. Syntax for drawing trees with tikz is just as simple, although
not as quick. To draw the same the tree with tikz the code is:

{% highlight latex %}
\begin{tikzpicture}
\node (A){A}
  child{ node (B){B} }
  child{ node (C){C} };
\end{tikzpicture}
{% endhighlight %}

Notice the semicolon, after the last defined child of A, you need
that or your code won't compile. The text in parentheses `(B)` signifies the name 
of the node that you can refer to when doing relative positioning. 
And the text in the braces `{B}` following the node's name, is the text that will
be displayed as the node in the tree.

To draw the same subtree in the qtree example:

{% highlight latex %}
\begin{tikzpicture}
\Node (A){A}
  child{
    % we replace \Node(B){B} with:
    node (B){B}
    child { node (D){D} }
    child { node (E){E} }
  }
  child{ node (C){C} };
\end{tikzpicture}
{% endhighlight %}


<h2>tikz caveats</h2>
<h1>Relative positioning</h1>
Before I mentioned relative positioning, so instead of specifying
coordinates to place nodes:

{% highlight latex %}
\node (A) at (1,1) {A};
\node (B) at (1,2) {B};
{% endhighlight %}

you can do something like:

{% highlight latex %}
\node (A) {A};
\node (B) [right =of A] {B};
{% endhighlight %}

To do this you need to use tell tikz to use the `positioning` package.

{% highlight latex %}
\usetikzlibrary{poisitioning}
{% endhighlight %}

Put this before begining a tikzpicture. The positioning words that are usable
are:

1. above
2. below
3. right
4. left

And you can mix and match the vertical and horizontal positioning words
as your heart desires. So `[below right =of A]` works just fine.


<h1>Every node style</h1>
You can set the style for every node in one line,
so you don't need to specifiy the style redundantly. This can be done by
something like:

{% highlight latex %}
\tikzstyle{every node} = [circle, minimum size=18pt, draw]
{% endhighlight %}

This example tells latex to draw circles around each node and have the text
at 18pt font.

<h1>Tree edge labels</h1>
For sure if you're drawing trees, you'll want to draw a trie at some point.
To label the edges in the two level binary tree in the previous examples:

{% highlight latex %}
\Node (A){A}
  child{ 
    node(B){B}
    edge from parent node[left, draw=none]{0} % labels the edge (A, B) with 0
  }
  child{ node(C){C} };
{% endhighlight %}

The first argument `left` in the brackets tells which side to put the label, and
`draw=none` tells latex not to draw the circle if you've previously
defined a style for every node. Because essentially this label is a node.
