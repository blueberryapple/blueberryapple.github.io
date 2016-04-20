---
layout: post
date: 2016-04-20 12:23:00 -0800
categories: latex
---
Continuing with yesterday, today I'll be talking about how to draw
graphs in latex. The package I like to use is tikz. In my last post ["Drawing
Trees in Latex,"]({% post_url 2016-04-19-drawing-trees-in-latex %}) I discussed relative positioning and it didn't make much sense
in terms of trees, however, it is more relevant when drawing graphs as you
will see in a moment. As we all know, a graphs consists of two elements:

1. the set of vertices
2. the set of edges

<h2>Vertices</h2>
Here is an example with how to declare vertices with relative positioning
in tikz:

{% highlight latex %}
\begin{tikzpicture}
\Node (A) {A};
\Node (B) [left =of A] {A};
\Node (C) [below =of B] {C};
\end{tikzpicture}
{% endhighlight %}

Here we declare three nodes A, B, and C. Every node declaration should end
with a semicolon or you will get a compile error. It was different when
drawing trees because starting from the root node was one whole node declartion.

<h2>Edges</h2>
<h1>Undirected</h1>
Here is an example with how to draw edges, and I'm sure there are other
ways to draw this, but the way I'm going to show is the most intuitive to me.

{% highlight latex %}
\begin{tikzpicture}
% nodes from previous example
\Node (A) {A};
\Node (B) [left =of A] {A};
\Node (C) [below =of B] {C};

% edges
\path
(A) edge (B)
(B) edge (C)
(C) edge (B);
\end{tikzpicture}
{% endhighlight %}

It is important that you put a semicolon after the last defined edge in the path.
But basically you use the names of the nodes and tell tikz to draw and edge between
them with, you've guessed it, the keyword edge. It's really just that simple.

<h1>Directed</h1>
To draw directed graphs with tikz is really simple first you must tells tikz
to use the arrow library by stating `\usetikzlibrary{arrows}` . 
If you are using another library, seperate them by a comma. You just change 
the declaration of a tikzpicture to `\begin{tikzpicture}[->]` . That arrow 
will tell tikz to use arrows for edges. But depending on your preferences, 
the arrowhead may not be to your liking, you can change it to the latex 
default arrowhead by adding `\tikzset[>=latex]` before you begin a tikzpicture.
