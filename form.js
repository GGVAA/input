function range() {
  var val = $(".range").val();
  $(".range").css({
    background:
      "background: linear-gradient( right, rgba(234, 81, 188, 1) 0%, rgba(234, 81, 188, 1) " +
      val +
      "%, #949bb7 " +
      val +
      "%, #949bb7 100%)",
  });
}
