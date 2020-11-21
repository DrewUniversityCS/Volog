import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "../static/css/pages/FAQ.css";

export class FAQ extends React.Component {
    render() {
        return <Container>
            <Row>
                <div className="title-text">
                    Frequently Asked Questions
                </div>
            </Row>
            <Container className="FAQ-container">
                <Row>
                    <Col>
                        <h1>
                            How many crabs can you fit into a standard sized crab bucket?
                        </h1>
                    </Col>
                    <Col>
                        <h1>
                            What would happen if a frog attempted to pilot a U.S. government military drone?
                        </h1>
                    </Col>
                    <Col>
                        <h1>
                            How many dogs does it take to screw in a light bulb?
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <body>
                        Approximately 14 crabs, however depending on the crab breed the number can go as high up as 16.
                        Consult the CAW (Crab Agency of the World) crab handling handbook for further information.
                        </body>
                    </Col>
                    <Col>
                        <body>
                        Frogs have very little tactile acumen so it's unlikely they would have the skill necessary to
                        pilot a military drone. Perhaps if the drone was wired up via a direct neural interface, the
                        frogs
                        neural system could be used a compute instance for a pilot AI.
                        </body>
                    </Col>
                    <Col>
                        <body>
                        There is an indefinite upper bound. As dogs do not understand light bulbs it's likely that
                        adding
                        additional dogs will have diminishing returns. However, it's possible that given a proper
                        environment
                        the dogs could over time evolve into a sapient species capable of light bulb operations.
                        </body>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>
                            Have there been any news regarding the disappearance of Owls in 2014?
                        </h1>
                    </Col>
                    <Col>
                        <h1>
                            Where did my eyes go? I cannot seem to find them.
                        </h1>
                    </Col>
                    <Col>
                        <h1>
                            W       H             Y  ?
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <body>
                        As of right now it is still unknown why all Owls have disappeared. Although the New Zealandese
                        Owl Liberation Front
                        has been arguing in front of the UN that they have all been taken hostage by the Italian mafia,
                        this claim is widely
                        disputed. The major global superpowers do not have an official stance regarding the issue.
                        </body>
                    </Col>
                    <Col>
                        <body>
                        The most likely location of your eyes are your eye sockets, however on rare occasions they can
                        be
                        found in your kitchen cupboard. It is recommended to ask your non eye-hungry friends to help you
                        find them.
                        </body>
                    </Col>
                    <Col>
                        <body>
                        Why what? What kind of question is that? Do you really think I am present in this endless void
                        just to answer
                        these vague and absurd questions? I guess I am, although the reason for that is a question in
                        itself. Is that
                        what your question means? Is it a meta recursive exploration into my own fact of existence?
                        Probably not.
                        </body>
                    </Col>
                </Row>
            </Container>
        </Container>
    }
}