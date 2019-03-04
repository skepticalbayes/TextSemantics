## Understanding Contextualised word embeddings

We had a breakthrough moment in NLP with **universal word embeddings using GLOVE and word2vec** which understood universal semanitcs but we can't account for linguistic **polysemy**, ie. the word "back" has different semantics(meaning) "my back hurts" and "going back outdoors for a jog".

We countered this issue with the contextualised embeddings (BERT and elmo being major implementations of this abstract notion), and we further scaled this idea to form embeddings for variable length sentences/ phrases which captured the context of the text.

We will explore how these embeddings make sense by visualising some phrases on the 2D cartesian plane.

https://skepticalbayes.github.io/TextSemantics/ has a keyword graph of medical terms; built using **d3.js**. You can zoom on the graph by
double clicking and explore most closely relevant terms by clicking on that term in the legend.

The code to prepare is present in graph.js, static code is present in static folder in js, css, html.

**Text semantics can have multiple use cases:**

-Contextual word embeddings for language models for transfer learning in various supervised training tasks.

-Semantic search on proprietary corpus for free text search feed.

-Unsupervised tasks using sentence embeddings like clustering/text rankings.