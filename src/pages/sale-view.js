import React from 'react'
import Image from 'next/image'

const SaleView = () => {
    return (
        <main>
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb es-breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Главная</a></li>
                    <li className="breadcrumb-item"><a href="#">Акции</a></li>
                    <li className="breadcrumb-item active sm-hide" aria-current="page">Cкидка 15% на первый онлайн-заказ</li>
                </ol>
            </nav>
        </div>
        <section className="section-wrp">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="discount-title">Cкидка 15% на первый онлайн-заказ</div>
                    </div>
                    <div className="col-md-8">
                        <div className="discount-pr">
                            <a href="#">
                                <Image src={require("../assets/img/discount-pr.jpg")} alt="product" className="img-fluid" />
                            </a>
                            <div className="discount-date">
                                <div className="discount-date-inner">20. <br />05.</div>
                            </div>
                        </div>
                        <div className="discount-pr-content">
                            Внезапно, непосредственные участники технического прогресса неоднозначны и будут функционально разнесены на независимые элементы. Задача организации, в особенности же внедрение современных методик однозначно фиксирует необходимость системы массового участия. Но убеждённость некоторых оппонентов в значительной степени обусловливает важность системы обучения кадров, соответствующей насущным потребностям. 
                        </div>
                        <div className="discount-pr-content">
                            Задача организации, в особенности же сплочённость команды профессионалов не оставляет шанса для вывода текущих активов. С другой стороны, глубокий уровень погружения требует от нас анализа дальнейших направлений развития.
                        </div>
                        <div className="discount-pr-content">
                            Картельные сговоры не допускают ситуации, при которой непосредственные участники технического прогресса указаны как претенденты на роль ключевых факторов! С другой стороны, выбранный нами инновационный путь создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса распределения внутренних резервов и ресурсов.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}

export default SaleView