import React, { Component } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import profileImage from "../assets/profile-image.jpg";

class Info extends Component {
    state = {
    name: "Ваше Имя",
    nickname: "Ваш Псевдоним",
    birthDate: "Ваша Дата Рождения",
    story: "Ваша История",
    };

    componentDidMount() {
    // Здесь вы можете выполнить дополнительные операции, например, получить данные с сервера
    }

    render() {
        const { name, nickname, birthDate, story } = this.state;
    
        return (
        <SectionWrapper idName="info">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
        >
            <h1 className="text-4xl font-bold mt-8">{name}</h1>
            <h2 className="text-xl text-gray-500">{nickname}</h2>
            <p className="text-gray-600 mt-4">Дата рождения: {birthDate}</p>
            <p className="text-gray-600 mt-4">{story}</p>
            <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                src={profileImage}
                alt="Profile"
                className="w-48 h-48 mt-8 rounded-full"
            />
        </motion.div>
        </SectionWrapper>
        );
    }
}


export default Info;
