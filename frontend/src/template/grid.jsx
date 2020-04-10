import React, { Component } from 'react'

export default class Grid extends Component {

    //passando uma lista de numeros ate 4 numeros
    // para converter no padrão de 12 colunas do
    //bootstrap
    toCssClasses(numbers) {
      const cols = numbers ? numbers.split(' ') : []
      let classes = ''
      
      if(cols[0]) classes += `col-xs-${cols[0]}`
      if(cols[1]) classes += `col-sm-${cols[1]}`
      if(cols[2]) classes += `col-md-${cols[2]}`
      if(cols[3]) classes += `col-lg-${cols[3]}`

      return classes
    }
    render() {
         //metodo para rebnderizar o Grid

        const gridClasses = this.toCssClasses(this.props.cols || 12)
        //pegando os parametros que quero receber 
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}