import React from 'react'
import PageHeader from '../template/pageHeader'
import { Component } from 'react'

export default class About extends Component {
    render() {
        return(
    <div>
        <PageHeader  name='Sobre' small='Nós'></PageHeader>

        <h2>Nossa História</h2>
        <p>Aprender e aprenadendo..</p>
        <h2>Missão e Visão</h2>
        <p>Alcançar o OminiStack...</p>
        <h2>Imprensa</h2>
        <p>Myself...</p>
    </div>
)
}}