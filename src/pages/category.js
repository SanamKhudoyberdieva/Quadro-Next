import React, { useState } from 'react'
import Product from '@/components/Product'
import { Nav, Tab } from 'react-bootstrap';

const Category = () => {
    const [activeKey, setActiveKey] = useState("category1");

    const handleTabSelect = (key) => {
        setActiveKey(key);
    };

    return (
        <main>
            <section className="category-menu">
                <div className="category-menu-header">
                    <div className="header-content">
                        <h1 className="header-cont-title">Меню</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb es-breadcrumb-menu">
                                <li className="breadcrumb-item"><a href="#">Главная</a></li>
                                <li className="breadcrumb-item">Меню</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <Tab.Container activeKey={activeKey} onSelect={handleTabSelect}>
                    <div className="es-tb-nav-wrapper">
                        <Nav className="nav nav-tabs es-nav-tabs" id="myTab" role="tablist">
                            <Nav.Item className="nav-item" role="presentation">
                                <Nav.Link className="nav-link active" id="home-tab" eventKey="category1"
                                    href="/category/[category1]"
                                    as="/category/category1">
                                    Сезонное меню
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item  className="nav-item" role="presentation">
                                <Nav.Link eventKey="category2"
                                    href="/category/[category2]"
                                    as="/category/category2" className="nav-link" id="profile-tab" data-toggle="tab" data-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Основное меню</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item" role="presentation">
                                <Nav.Link eventKey="category3" className="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Японское меню</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item" role="presentation">
                                <Nav.Link eventKey="category4" className="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Японское меню</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <h2 className="header-content-subtitle">Основное меню</h2>
                    <Tab.Content className="tab-content" id="myTabContent">
                        <Tab.Pane eventKey="category1" className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <ul className="nav nav-pills es-nav-pills" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Паста и Ризотто</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-toggle="pill" data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Супы</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-contact-tab" data-toggle="pill" data-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Супы</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="es-products-list">
                                        <Product />
                                        <Product />
                                        <Product />
                                        <Product />
                                        <Product />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="category2" className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">..ggg.</Tab.Pane>
                        <Tab.Pane eventKey="category3" className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">..yyy.</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                </div>
            </section>
        </main>
    )
}

export default Category