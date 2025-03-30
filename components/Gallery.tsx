import React, { useState } from "react";
import { GalleryView } from "@ssupat/components";
import {
    Box,
    Button,
    ButtonGroup,
    Heading,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Select,
} from "@chakra-ui/react";

const gallery = {
    images: [
        {
            src: "https://placehold.co/600x400/000000/FFFFFF/png",
            alt: "Testovací obrázek",
            title: "Testovací obrázek",
        },
        {
            src: "https://placehold.co/600x400/EEE/31343C",
            alt: "Testovací obrázek",
            title: "Testovací obrázek",
        },
        {
            src: "https://placehold.co/600x400/ffdddd/FFFFFF/png",
            alt: "Testovací obrázek",
            title: "Testovací obrázek",
        },
    ],
    aspectRatio: "16/9",
    columns: 2,
    spacing: 4,
};

const getRandomImage = () => gallery.images[Math.floor(Math.random() * gallery.images.length)]

export function Gallery() {
    const [columns, setColumns] = useState(3);
    const [spacing, setSpacing] = useState(0);
    const [aspectRatio, setAspectRatio] = useState("16/9");
    const [images, setImages] = useState(gallery.images);

    return (
        <Box display="flex" flexDir="column" gap={4}>
            <Box display="flex" flexDir="column" gap={4} border="1px solid #000" p={4}>
                <Heading size="md">Nastavení galerie</Heading>

                <Box display="flex" flexDir="row" gap={2} mt={2}>
                    <Box w="full" display="flex" flexDir="column" justifyContent="space-between" gap={2}>
                        <Box display="inline-flex">
                            Počet sloupců
                        </Box>

                        <NumberInput
                            value={columns}
                            step={1}
                            min={1}
                            max={10}
                            keepWithinRange={false}
                            clampValueOnBlur={false}
                            onChange={(val) => setColumns(Number(val))}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </Box>

                    <Box w="full" display="flex" flexDir="column" justifyContent="space-between" gap={2}>
                        <Box display="inline-flex">
                            Mezera
                        </Box>

                        <NumberInput
                            value={spacing}
                            step={1}
                            min={0}
                            max={10}
                            keepWithinRange={false}
                            clampValueOnBlur={false}
                            onChange={(val) => setSpacing(Number(val))}

                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </Box>

                    <Box w="full" display="flex" flexDir="column" justifyContent="space-between" gap={2}>
                        <Box display="inline-flex">
                            Poměr stran
                        </Box>

                        <Select
                            value={aspectRatio}
                            onChange={(e) => setAspectRatio(e.target.value)}
                        >
                            <option value="1">1:1 (čtverec)</option>
                            <option value="4/3">4:3</option>
                            <option value="16/9">16:9</option>
                            <option value="2/3">2:3 (portrét)</option>
                        </Select>
                    </Box>
                </Box>

                <Box>
                    <ButtonGroup>
                        <Button size="sm" onClick={() => setImages(image => image.slice(0, -1))}>-</Button>
                        <Button size="sm" onClick={() => setImages([...images, getRandomImage()])}>+</Button>
                    </ButtonGroup>
                </Box>

                <Heading size="md">Náhled</Heading>

                <GalleryView {
                    ...{
                        ...gallery,
                        aspectRatio,
                        images,
                        columns,
                        spacing
                    }
                } />
            </Box>
        </Box>
    )
}

export default Gallery