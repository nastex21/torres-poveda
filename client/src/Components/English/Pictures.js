import React, { useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import axios from "axios";

function Pictures(props) {
    const [imageArray, setArray] = useState([]); //original fetched, huge array
    //Modal stuff
    const [show, setShow] = useState(false);
    //Carousel stuff
    const [index, setIndex] = useState(0);

    useEffect(() => {
        var imageApi = "/api/get-images";

        axios.get(imageApi, {
            params: {
              ID: props.match.params.id
            }
          }).then((response, err) => {
            if (response) {
                setArray([...imageArray, ...response.data]);
            }
        });
    }, []);

    const clickModal = function (num) {
        setIndex(num);
        setShow(true);
    };

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

    return (
        <div>
            <Container>
                <Row xs={3} md={6} data-toggle="modal" data-target="#imageModal">
                    {imageArray.map((item, num) => (
                        <Image
                            src={item.src}
                            key={num}
                            className="w-100"
                            data-target="#carousel"
                            data-slide-to={num}
                            thumbnail
                            onClick={() => clickModal(num)}
                        />
                    ))}
                </Row>
                <Modal
                    id="imageModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="true"
                    show={show}
                    onHide={() => setShow(false)}
                >
                    <ModalBody>
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            {imageArray.map((item, num) => (
                                <CarouselItem>
                                    <Image
                                        src={item.src}
                                        key={num}
                                        className="w-100"
                                        data-target="#carousel"
                                        data-slide-to={num}
                                    />
                                </CarouselItem>
                            ))}
                        </Carousel>
                    </ModalBody>
                </Modal>
            </Container>
        </div>
    )
}

export default Pictures;