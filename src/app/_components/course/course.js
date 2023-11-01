import style from '@/app/styles/course.module.css'

const Course = ({course}) => {
    const {title, content, image} = course.data.attributes;


    return (
        <section className={style.curso} style={{
            backgroundImage: `linear-gradient( to right, rgb(0 0 0/ .65), rgb(0 0 0/ .7)), url(${image.data.attributes.url})`
        }}>
            <div className={'contenedor ' + style['curso-grid']}>
                <div className={style.contenido + " contenido"}>
                    <h2 className="heading">{title}</h2>
                    <p className={style.texto}>{content}</p>
                </div>
            </div>
        </section>
    )
}

export default Course
