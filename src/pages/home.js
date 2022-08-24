import { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import {
    Flex, Image, Box, Badge, Spacer
} from "@chakra-ui/react";
import SERVER from '../constants'
import api from '../api'

export function Dashboard() {
    const [login, setLogin] = useState(false);
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("@scan_scope") === null) {
            setLogin(true)
        } else {
            const results = async () => {
                const response = await api.get('/image/list');
                console.log(response.data)
                setImages(response.data)
            }
            results();
        }

    }, [])
    return (
        <Flex w={"100vh"} h={"100vh"} justifyContent={"center"} >
            {login && <Navigate to={"/"} />}
            <Box boxSize='sm' mb={10}>

                {images?.map(img =>
                    <Box boxSize='sm' mb={10} display={"flex"} flexDirection={'row'}>
                        <Image src={`${SERVER.SERVER_IMAGES}/${img.image}`} alt='Dan Abramov' />

                        <Box display={"flex"} flexDirection={'column'}>
                            <Badge ml='1' fontSize='0.8em' colorScheme='green' mb={5} mt={2}>
                                Latitude: {img.latitude}
                            </Badge>

                            <Badge ml='1' fontSize='0.8em' colorScheme='green' mb={5} >
                                Longitude: {img.longitude}
                            </Badge>

                            <Badge ml='1' fontSize='0.8em' colorScheme='green' mb={5}>
                                Paciente: {img.patient}
                            </Badge>

                            <Badge ml='1' fontSize='0.8em' colorScheme='green' mb={5}>
                                Idade: {img.age}
                            </Badge>
                        </Box>

                        <Box display={"flex"} flexDirection={'column'}>
                            <Badge ml='1' fontSize='0.8em' colorScheme='green' mb={5} mt={2}>
                                Data de nascimento: {img.birthdate}
                            </Badge>

                            <Badge ml='1' fontSize='0.8em' colorScheme='green' mb={5} >
                                Covid: {img.covid}
                            </Badge>

                            <Badge ml='1' fontSize='0.8em' colorScheme='green' mb={5}>
                                Email: {img.date}
                            </Badge>

                            <Badge ml='1' fontSize='0.8em' colorScheme='green' mb={5}>
                                Email: {img.email}
                            </Badge>
                        </Box>

                        <Box display={"flex"} flexDirection={'column'}>
                            <Badge ml='1' fontSize='0.8em' colorScheme='green' mb={5} mt={2}>
                                Name: {img.name}
                            </Badge>

                            <Badge ml='1' fontSize='0.8em' colorScheme='green' mb={5} >
                                Patologia: {img.pathology}
                            </Badge>

                            <Badge ml='1' fontSize='0.8em' colorScheme='green' mb={5}>
                                Email: {img.date}
                            </Badge>
                        </Box>


                        <Box display={"flex"} flexDirection={'column'}>
                            <Badge ml='1' fontSize='0.8em' colorScheme='red' mb={5} mt={2}>
                                Problema de saúde
                            </Badge>
                            <Badge ml='1' fontSize='0.8em' colorScheme='red' mb={5} mt={2}>
                                Value: {img.health_problem.value}
                            </Badge>

                            <Badge ml='1' fontSize='0.8em' colorScheme='red' mb={5} mt={2}>
                                Others: {img.health_problem.others}
                            </Badge>
                        </Box>

                        <Box display={"flex"} flexDirection={'column'}>
                            <Badge ml='1' fontSize='0.8em' colorScheme='blue' mb={5} mt={2}>
                                Medicamento
                            </Badge>
                            <Badge ml='1' fontSize='0.8em' colorScheme='blue' mb={5} mt={2}>
                                Value: {img.medication.value}
                            </Badge>

                            <Badge ml='1' fontSize='0.8em' colorScheme='blue' mb={5} mt={2}>
                                Others: {img.medication.others}
                            </Badge>
                        </Box>

                        <Box display={"flex"} flexDirection={'column'}>
                            <Badge ml='1' fontSize='0.8em' colorScheme='yellow' mb={5} mt={2}>
                                Fumante
                            </Badge>
                            <Badge ml='1' fontSize='0.8em' colorScheme='yellow' mb={5} mt={2}>
                                Value: {img.smoker.value}
                            </Badge>

                            <Badge ml='1' fontSize='0.8em' colorScheme='yellow' mb={5} mt={2}>
                                Others: {img.smoker.others}
                            </Badge>
                        </Box>
                    </Box>

                )}
            </Box>
        </Flex>
    )
}