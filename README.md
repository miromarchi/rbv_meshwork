rbv_meshwork
============

Retebuonvivere: meshwork d3 visualization

# Description

This repository is a workshop for the creation of a [d3][2] meshwok visualization to be used in [retebuonvivere][0] project.

# Goals

We want to:

1. Create a meshwork visualization for retevuonvivere project

2. Create a general meshwork visualization algoritm for displaying dynamic networks (We want to make the meshwork algorithm open, in order to be implemented in other network apps such as [gephi][3]).

# Dynamic Network

The "traditional" way to visualize dynamic networks - which are networks changing through time - is to add a timeline object (a slide) by which the user can limit the time range of data. A remarkable example is the [immersion][5] web app created by Daniel Smilkov, Deepak Jagdish, and César Hidalgo at Mit Media Lab, which displays collaborators through emails. A similar solution is used in the wellknown desktop app [Gephi][3] (for details see [this tutorial](http://www.clementlevallois.net/gephi/tuto/gephi_tutorial_dynamics.pdf) by Gephi community supporter Clement Levallois).

# Meshwork

We want to display a dynamic network in a different way, one that can show time without the need to change the graph. In order to do it we propose to follow the meshwork idea explained by anthropologist Tim Ingold in his 2011 book *[Being Alive: Essays on Movement, Knowledge and Description][4]*. 

Have some quotes (p. 63):
> Imagine two intersecting lines, A and B. Their intersection defines a point, P. What difference would it make if we depicted A and B as points, and P as the line of their connection? Mathematically, these alternatives might be regarded as simple transforms of one another. As such, they would be equivalent ways of positing a relation between A and B: either as intersection or as connection.

> [...] revealing, behind the conventional image of a network of interacting entities, what I call the meshwork of entangled lines of life, growth and movement. This is the world we inhabit. My contention, throughout, is that what is commonly known as the ‘web of life’ is precisely that: not a network of connected points, but a meshwork of interwoven lines.

The idea is fairly simple: invert nodes with edges! Traditionally network graphs display data subjects as nodes-*circles* (eg. people as nodes-circles) and data relations as edges-*lines* (e.g. "friends with" relations as edges-lines). The resulting graph is a timeless visualization of interconnected nodes, and focuses on nodes, hence on subjects. 

In the meshwork visualization we want to assign data subject to *lines*, and data relations to *circles*. This way a node-line can be displayed in a temporal way, starting from one side of the screen, extending to the other. And when that node-line has a relation to another node-line, they intersect together. This visualization focuses more on interweaving, intertwining, entanglement. The meshwork, by incorporating time in the visualization, doesn't need a timeline to be scrolled or a movie to be played.

## Sketches

You can follow this idea in some mockup images:

* Organization line 

  ![lines.jpg](images/lines.jpg)
  
* Some organizations drawn together with project lines starting from intersections (projects lines are an entanglement of organization threads)  
  
  ![lines2.jpg](images/lines2.jpg), ![lines3.jpg](images/lines3.jpg), ![lines6.jpg](images/lines6.jpg)

* Project ego-meshwork
  
  ![linesG.jpg](images/linesG.png), ![project-meshwork.jpg](images/project-meshwork.jpg).

* Lines details
  
  ![lines5.jpg](images/lines5.png), ![lines7.jpg](images/lines7.png), ![linesPies.jpg](images/linesPies.png).

## Examples of meshworks

On the internet there are some examples of meshwork type visualizations:

| Example | Author | Description | JS library used / Technology |
| ------- | ------ | ----------- | --------------- |
| [Comic Book Narrative Charts][6] | by Nancy Iskander, Matthew Thorne, Craig Kaplan. | It's a specialized instance of a [Sankey Diagram][7]. | d3.js / svg |
| [Network Graph Visualizer][8] | by Tom Preston-Werner | It shows collaboration code | Don't know / canvas. |

# Main workflow

We are going to export data from a Drupal MySQL database via json, import them into a [d3 javascript library][2] and visualize them on the browser.


# Data structure

| Data Object / Drupal content type    | SVG Object / d3 object | Description                                 |
| -------------------- | ------------- | -----------                                 |
| Organization nodes   | Paths (lines) |                                             |
| Projects nodes       | Paths (lines) |                                             |
| Events nodes         | Circles       | Circles as milestones in organization lines. |
| Collaborations nodes | Intersections | Not visible. Two organizations-lines intersect each other if there is a collaboration between them, and in the intersection point there is the project line. |

Each content type has a compound date field, with start and end dates. 

# Desired Interaction 

| Event                    | Behavior             |
| ------------------------ | -------------------- |
| OnMouseOver over circles | show event preview   |
| OnMouseOver over lines   | show organization or project preview |
| OnClick over lines       | highlight ego-meshork of that organization or project → all neighbors lines |
| OnDrag over lines        | move dragged lines to allow self adjustment of visualization |
| OnDoubleClick over lines | go to node url |

# Submodule of

This repository is a submodule of [retebuonvivere][0]


[0]: https://github.com/fonzy85vr/retebuonvivere
[1]: http://www.retebuonvivere.org
[2]: http://d3js.org/
[3]: https://gephi.github.io/
[4]: http://geactblog.files.wordpress.com/2012/03/tim_ingold-being_alive__essays_on_movement_knowledge_and_description__-routledge2011.pdf
[5]: https://immersion.media.mit.edu/
[6]: http://csclub.uwaterloo.ca/~n2iskand/?page_id=13
[7]: http://bost.ocks.org/mike/sankey/
[8]: https://github.com/blog/39-say-hello-to-the-network-graph-visualizer
