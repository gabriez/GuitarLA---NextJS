import React from 'react'

const LayoutContent = ({children, title, conditional}) => {

    if (conditional === 'main') {
        return (
          <main className="contenedor">
              <h3 className="heading">{title}</h3>
              {children}
          </main>
        )
    } else if(conditional === 'section') {
        return (
            <section className="contenedor">
                <h3 className="heading">{title}</h3>
                {children}
            </section>
          )
    }else if(conditional === 'div') {
        return (
            <div className="contenedor">
                <h3 className="heading">{title}</h3>
                {children}
            </div>
          )
    }
}

export default LayoutContent
