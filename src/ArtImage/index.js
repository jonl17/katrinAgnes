import React from "react"
// import ReactDOM from "react-dom"
import "./index.css"
import Image from "../Image"
import { Stickyroll } from "@stickyroll/stickyroll"
import Img from "gatsby-image"

class ArtImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: this.props.images.allFile.edges,
            maxScroll: window.innerHeight - 100,
            posX: 0,
            index: 0,
            displayedImages: [], // images to stick
            displayedImagesCords: [], // left and top pos of these images
        }
        this.drawCanvas = this.drawCanvas.bind(this)
    }

    appendDisplayedImages(image) {
        const list = [...this.state.displayedImages, image]
        this.setState({
            displayedImages: list,
        })
    }
    appendCords(cords) {
        const list = [...this.state.displayedImagesCords, cords]
        this.setState({
            displayedImagesCords: list,
        })
    }
    removeDisplayedImage(index) {
        const list = [...this.state.displayedImages]
        const cordList = [...this.state.displayedImagesCords]
        // list.splice(index, 1)
        list.pop()
        cordList.pop()
        /* it is important to update both lists in the state */
        this.setState({
            displayedImages: list,
            displayedImagesCords: cordList,
        })
    }
    drawCanvas() {
        /* draws images to the screen that shall be displayed */
        return this.state.displayedImages.map((item, index) => (
            <Img
                key={index}
                style={{
                    height: "100%",
                    width: "100%",
                    maxHeight: 400,
                    maxWidth: 400,
                    position: "fixed",
                    top: window.innerHeight,
                    left: `${this.state.displayedImagesCords[index].x}%`,
                    transform: `translateY(-${
                        this.state.displayedImagesCords[index].y
                    }px)`,
                }}
                className="test-img"
                fluid={item}
            />
        ))
    }

    render() {
        return (
            <>
                {this.drawCanvas() /* this function is quite fantastic, displays images that should stick */}
                <Stickyroll pages={this.state.images} factor={3}>
                    {({ page, pageIndex, pages, progress }) => {
                        var y = progress * 1000
                        var x = page * 10
                        if (this.state.posX !== x) {
                            this.setState({
                                posX: x,
                            })
                        }
                        if (y >= this.state.maxScroll) {
                            y = this.state.maxScroll
                            /* append to the image array of displayed ones */
                            if (
                                this.state.displayedImages[pageIndex] !==
                                this.state.images[pageIndex].node
                                    .childImageSharp.fluid
                            ) {
                                this.appendDisplayedImages(
                                    this.state.images[pageIndex].node
                                        .childImageSharp.fluid
                                )
                                /* Here we append the cords of the images that need to get sticked, only ones for each image */
                                this.appendCords({ x: x, y: y })
                                /* ----- */
                            }

                            if (pageIndex !== this.state.index) {
                                this.setState({
                                    index: pageIndex,
                                })
                            }
                            if (this.state.posX !== x) {
                                this.setState({
                                    posX: x,
                                })
                            }
                        }
                        if (y < this.state.maxScroll) {
                            if (
                                this.state.displayedImages[pageIndex] !==
                                undefined
                                /* if an image exists on this index */
                            ) {
                                /* remove it sir! */

                                this.removeDisplayedImage(pageIndex)
                            }
                        }

                        return (
                            <>
                                <Image
                                    x={x}
                                    y={y}
                                    fluid={
                                        this.state.images[pageIndex].node
                                            .childImageSharp.fluid
                                    }
                                />
                            </>
                        )
                    }}
                </Stickyroll>
            </>
        )
    }
}

export default ArtImage
