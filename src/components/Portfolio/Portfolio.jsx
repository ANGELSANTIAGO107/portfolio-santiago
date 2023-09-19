
import "../Portfolio/Portfolio.css"


const image = 'https://mir-s3-cdn-cf.behance.net/projects/404/c0a314175096841.Y3JvcCw4MDgsNjMyLDAsMA.png'

export const Portfolio = () => {
  return (
    <section className="info">
      <article className="txt">
        <h2>Santiago Sanchez Ariza</h2>
        <p>Currently SENA trainee of the Software Analysis and Development technologist
        fullstack developer and athlete.</p>
        
      </article>
      <article className="img">
        <img src={image} alt="" />
      </article>
    </section>

  )
}
