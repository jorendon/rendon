import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <div className="Nav text-center">
                <nav className={'navbar navbar-dark bg-dark'}>
                    <a href="1" className={'text-white'}>
                        {this.props.titulo}
                        <span className={'badge badge-pill badge-light m-2'}>
                        {this.props.cantidad}
                        </span>
                    </a>
                </nav>
            </div>
        );
    }
}

export default Nav;