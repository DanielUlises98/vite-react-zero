import PropTypes from 'prop-types';

export const FirstApp = ({title,subTitle,name})=>{
    return (
        <>
            <h1>{title}</h1>
            {/* <h1> { JSON.stringify(newMessage) } </h1> */}
            <p> {subTitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    subTitle: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    name:'Daniel Ulises',
    subTitle:'No hay subtitulo',
    title:'No hay titulo',
}