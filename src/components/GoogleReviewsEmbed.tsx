export default function GoogleReviewsEmbed() {
  // Uses your exact Google Maps embed to surface the reviews UI inside the map panel
  const src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.179976004967!2d-79.7604264!3d43.226686099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88602949d9679dc7%3A0x9cef4821419a4ba2!2sPure%20Marketing!5e0!3m2!1sen!2sca!4v1761254533887!5m2!1sen!2sca"
  return (
    <div className="w-full h-[360px] sm:h-[420px] lg:h-[500px] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5">
      <iframe
        title="Google Reviews — Pure Marketing"
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

