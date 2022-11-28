import React, {useEffect, useRef} from 'react';
import {Flex, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import axios from 'axios';

// https://cataas.com/doc.html

const getRandomCat = async () => {
    return await axios.get('https://cataas.com/cat?json=true')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        })
}

const getTags = () => {
    axios.get('https://cataas.com/api/tags')
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
}

const getCatsByTag = (tag: string) => {
    axios.get(`https://cataas.com/cat/${tag}`)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
}

function App() {

    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        getRandomCat().then(data => {
            if(imgRef.current) {
                console.log(data);
                imgRef.current.src = `https://cataas.com/${data.url}`;
            }
        });
    });

    return (
        <Flex>
            <Flex width="200px">
            <Table>
                <Thead>
                    <Tr>
                        <Th>Tag</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Tag</Td>
                    </Tr>
                </Tbody>
            </Table>
            </Flex>
            <img ref={imgRef}/>
        </Flex>
    );
}

export default App;
