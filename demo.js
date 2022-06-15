// var list = document.createElement('li');
//     list.innerHTML = '<a href="#heads' + i + '">' + heads[i].innerText + '</a>';
    
//     heads[i].outerHTML = '<h2 id="heads' + i + '">' + heads[i].innerText + '</h2>';
//     console.log(list);


//    var heads = document.querySelectorAll('h1, h2, h3');
//   for (i = 0; i < heads.length; i++) {
//     var headsItem = heads.item(i);
//     var list = document.createElement('li');
//     list.innerHTML = '<a href="#heads' + i + '">' + headsItem.innerText + '</a>';
    
//     console.log(list);
//   }

function(window, document) {
  var selector = document.querySelector('.richText');
  if (!selector) {
    return
  }

  var toc = document.createElement('details');
  var sum = document.createElement('summary');
  var list = document.createElement('ul');
  toc.id = 'toc';
  toc.open = true;
  sum.className = 'toc-title';
  sum.textContent = '目次';
  list.className = 'toc-container';
  toc.appendChild(sum);
  toc.appendChild(list);

  var headings = selector.querySelectorAll('h2, h3');
  if (headings.length == 0) {
    return
  }
  headings[0].parentNode.insertBefore(toc, headings[0]);
  var order = [];
  var stack = [{level: 1, element: list}];

  // 事前処理
  headings.forEach((heading) => {
    var level = parseInt(heading.tagName.substring(1))
    order.push(level);
  });

  headings.forEach((heading, i) => {
    var level = parseInt(heading.tagName.substring(1));
    var next = order[i + 1];
    var li = document.createElement('li');
    var a = document.createElement('a');
    var id = 'toc-' + (i + 1);
    var ul = document.createElement('ul');

    // 目次要素の生成
    a.textContent = heading.textContent;
    a.href = '#' + id;
    li.appendChild(a);
    if (level < next) {
      li.appendChild(ul);
    }

    // リンク先の生成
    heading.id = id;

    // 階層構造の生成
    var parent;
    do {
      parent = stack.pop();
    } while (parent.level >= level);
    parent.element.appendChild(li);
    stack.push(parent);
    stack.push({level: level, element: ul});
  });
};


(function(window, document) {
  var toc = document.getElementById('toc');
  var selector = document.querySelector('.post-body'); // 処理対象セレクタ
  if (!toc || !selector) {
    return
  }
  var list = document.createElement('ul');
  list.className = 'toc-container';
  toc.appendChild(list);

  var headings = selector.querySelectorAll('h2, h3, h4'); // 対象見出しタグ
  var order = [];
  var stack = [{level: 1, element: list}];

  // 事前処理
  headings.forEach(function(heading) {
    var level = parseInt(heading.tagName.substring(1))
    order.push(level);
  });

  headings.forEach(function(heading, i) {
    var level = parseInt(heading.tagName.substring(1));
    var next = order[i + 1];
    var li = document.createElement('li');
    var a = document.createElement('a');
    var id = 'toc-' + (i + 1);
    var ul = document.createElement('ul');

    // 目次要素の生成
    a.textContent = heading.textContent;
    a.href = '#' + id;
    li.appendChild(a);
    if (level < next) {
      li.appendChild(ul);
    }

    // リンク先の生成
    heading.id = id;

    // 階層構造の生成
    var parent;
    do {
      parent = stack.pop();
    } while (parent.level >= level);
    parent.element.appendChild(li);
    stack.push(parent);
    stack.push({level: level, element: ul});
  });
}(window, document));