export const share = (url = "https://uas-news.netlify.app") => {
  if (navigator.share) {
    navigator
      .share({
        title: "UAS News share",
        url,
      })
      .then(() => {
        console.log("Thanks for sharing!")
      })
      .catch(console.error)
  }
}
