import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import clientImages from '../data/carousel'


const TechCarousel = () => {

    const autoplayOptions = {
        delay: 8000,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
      }

    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])



    return (
        <div className="embla gap-3 mb-5" ref={emblaRef}>
        <div className="flex gap-3">
    
          <div className="embla__slide  flex flew-wrap gap-3">
          {clientImages.map((item) => {
            return (
                <div> 
                    <img src={item.image} width={120} height={120}/>
                </div>
            )
          })}
          </div>  

          <div className="embla__slide  flex flew-wrap gap-3">
          {clientImages.map((item) => {
            return (
                <div> 
                    <img src={item.image} width={120} height={120}/>
                </div>
            )
          })}
          </div> 
        </div>
      </div>
  
    )
}

export default TechCarousel