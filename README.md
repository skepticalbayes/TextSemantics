## Understanding Contextualised word embeddings

We had a breakthrough moment in NLP with **universal word embeddings using GLOVE and word2vec** which understood universal semanitcs but we can't account for linguistic **polysemy**, ie. the word "back" has different semantics(meaning) "my back hurts" and "going back outdoors for a jog".

We countered this issue with the contextualised embeddings (BERT and elmo being major implementations of this abstract notion), and we further scaled this idea to form embeddings for variable length sentences/ phrases which captured the context of the text.

We will explore how these embeddings make sense by visualising some phrases on the 2D cartesian plane.

Below is a keyword graph of medical terms; built using **d3.js**. You can zoom on the graph by
double clicking and explore most closely relevant terms by clicking on that term in the legend.

The code to prepare is present in graph.js, static code is present in static folder in js, css, html.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Semantic Keyword Graph</title>
    <link rel="stylesheet" type="text/css" href="../css/jquery-ui.min.css"/>
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="../css/font-awesome.min.css" />
    <link rel="stylesheet" type="text/css" href="../css/daterangepicker.css"/>
    <link rel="stylesheet" type="text/css" href="../css/dashboard.css" />
    <link rel="stylesheet" href="../css/bootstrap-multiselect.css" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <link rel="stylesheet" href="../css/graph.css"/>
    <script type="text/javascript" src="../js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="../js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="../js/bootstrap.min.js"></script>
    <script type="text/javascript" src="../js/moment.js"></script>
    <script type="text/javascript" src="../js/bootstrap-multiselect.js"></script>
    <script type="text/javascript" src="../js/daterangepicker.js"></script>
    <script type="text/javascript" src="../js/blockUI.js"></script>
    <script src="https://d3js.org/d3.v4.min.js"></script>
    <script type="text/javascript" src="../js/pym.min.js"></script>
    <script type="text/javascript" src="../js/data.json"></script>
</head>
<body>
    <div>
      <div class="col-lg-7" id="svg-container">
          <svg id="viz" align="center">
          </svg>
          <div id = "legend" class="col-sm-3" style="padding-right: 0px; padding-left: 0px;">
              <div class="legendTitle" style="font-size: 12px;">Keyword</div>
              <div class="legendText" style="font-size: 11px; color: #BABABA;">click to select a keyword</div>
          </div>
      </div>
    </div>
    <script type="text/javascript" src="../js/graph.js"></script>
</body>
</html>