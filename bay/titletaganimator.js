  const originalTitle = "ht‎ ‎ tps:/‎ /ho ‎ z‎ .lol‎/bay ";
  let index = 0;

  function animateTitle() {
    const title = document.title;
    if (index < originalTitle.length) {
      document.title = title + originalTitle[index];
      index++;
      setTimeout(animateTitle, 250);
    } else {
      setTimeout(resetTitle, 1);
    }
  }

  function resetTitle() {
    document.title = "";
    index = 0;
    setTimeout(animateTitle, 1000);
  }

  animateTitle();
