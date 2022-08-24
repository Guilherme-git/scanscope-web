import { Flex, Button, FormLabel, Spinner, Link, Heading, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import api from './../api'

export function Index() {
    const toast = useToast()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState(false);
    const [cadastrar, setCadastrar] = useState(false);
    const [login, setLogin] = useState(false);

    const entrar = async () => {
        setStatus(true)
        if(!email && !password) {
            toast({
                title: 'Aviso',
                description: "Preencha todos os campos",
                status: 'warning',
                duration: 2000,
                isClosable: true,
              })
        } else {
            const response = await api.post('/users/auth', {
                email,
                password
            })
    
            if(response.data.message == 'Not register') {
                toast({
                    title: 'Aviso',
                    description: "Esse usuário não está cadastrado",
                    status: 'warning',
                    duration: 2000,
                    isClosable: true,
                  })
            } else {
                localStorage.setItem("@scan_scope", "logado")
                setLogin(true)
            }
            setStatus(false)
          
        }
        setEmail("")
        setPassword("")
        setStatus(false)
    }

    const cadastro = async () => {
        setStatus(true)
        if(!email && !password) {
            toast({
                title: 'Aviso',
                description: "Preencha todos os campos",
                status: 'warning',
                duration: 2000,
                isClosable: true,
              })
        } else {
            const response = await api.post('/users/save', {
                email,
                password
            })
    
            if(response.data.message == 'Save') {
                toast({
                    title: 'Conta cadastrada.',
                    description: "Cadastro realizado com sucesso",
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                  })
            }
            setCadastrar(false)
        }
        setEmail("")
        setPassword("")
        setStatus(false)
        
    }

    return (
        <Flex w={"100vw"} h={"100vh"} alignItems={"center"} justifyContent={"center"}>
            {login && <Navigate to={"/dashboard"} />}

            {!cadastrar ?
                <Flex as="form" width={"100%"} maxWidth={"360px"} bg={"gray.800"} p={"8"} borderRadius={"8"} flexDirection={"column"}>
                    <Heading mb={5}>Login</Heading>

                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                        name="email"
                        id="email"
                        placeholder="Email"
                        type={"email"}
                        focusBorderColor={"gray.500"}
                        bgColor={"gray.900"}
                        variant={"filled"}
                        _hover={{
                            bgColor: "gray.700"
                        }}
                        size={"lg"}
                        mb={"4"}
                        value={email}
                        onChange={t => setEmail(t.target.value)}
                    />

                    <FormLabel htmlFor="password">Senha</FormLabel>
                    <Input
                        name="password"
                        id="password"
                        placeholder="Senha"
                        type={"password"}
                        focusBorderColor={"gray.500"}
                        bgColor={"gray.900"}
                        variant={"filled"}
                        _hover={{
                            bgColor: "gray.700"
                        }}
                        size={"lg"}
                        value={password}
                        onChange={t => setPassword(t.target.value)}
                    />

                    {/* <Link mt={2} onClick={() => setCadastrar(true)} color={'orange.300'}>Cadastrar-se</Link> */}

                    <Button mt={"6"} colorScheme={"orange"} size={"lg"} onClick={entrar}>
                        {status ? <Spinner /> : "Entrar"}
                    </Button>
                </Flex>
                :
                <Flex as="form" width={"100%"} maxWidth={"360px"} bg={"gray.800"} p={"8"} borderRadius={"8"} flexDirection={"column"}>
                    <Heading mb={5}>Cadastro</Heading>

                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                        name="email"
                        id="email"
                        placeholder="Email"
                        type={"email"}
                        focusBorderColor={"gray.500"}
                        bgColor={"gray.900"}
                        variant={"filled"}
                        _hover={{
                            bgColor: "gray.700"
                        }}
                        size={"lg"}
                        mb={"4"}
                        value={email}
                        onChange={t => setEmail(t.target.value)}
                    />

                    <FormLabel htmlFor="password">Senha</FormLabel>
                    <Input
                        name="password"
                        id="password"
                        placeholder="Senha"
                        type={"password"}
                        focusBorderColor={"gray.500"}
                        bgColor={"gray.900"}
                        variant={"filled"}
                        _hover={{
                            bgColor: "gray.700"
                        }}
                        size={"lg"}
                        value={password}
                        onChange={t => setPassword(t.target.value)}
                    />

                    <Link mt={2} onClick={() => setCadastrar(false)} color={'orange.300'}>Login</Link>

                    <Button mt={"6"} colorScheme={"orange"} size={"lg"} onClick={cadastro}>
                        {status ? <Spinner /> : "Cadastrar"}
                    </Button>
                </Flex>
            }

           

        </Flex>
    )
}