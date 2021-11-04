import React, { Component, ScrollView } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../Css/LoggedPage.css';
import axios from 'axios';

export class LoggedPage extends Component {
    componentDidMount() {
        document.querySelector("#MainBody").style.overflowY = "scroll";
        document.querySelector("#colRight").style.animation = "none";
        document.querySelector("#colRight").style.opacity = "100%";
    }

    render() {

        return (
            <div>
                <div id="Page">
                    <div>
                        <img id="MainImage" src="https://i.ytimg.com/vi/VGd9vYfV06U/maxresdefault.jpg" />
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Visibility</th>                                    
                                    <img class="LoggedImage" src="https://cdn2.iconfinder.com/data/icons/cyber-crime-15/750/Atom_nucleus_science-512.png" />
                                    <p>
                                        A website no one sees has zero value. Unless a site commands brand name appeal, it must rely on other methods to draw traffic.
                                                This generally means achieving a high search engine ranking. In practice, this requires a number of elements. Successful websites maintain quality content and add to it consistently..
                                                Ranking well also hinges on search engine optimization, which includes careful keyword selection, appropriate meta- and title-tags, and both incoming and outgoing links. Deploying useful
                                                SEO methods takes time or engaging the services of SEO experts. Potential customers who don't use the Internet for shopping and news reading may not find your website at all, so if you don't
                                                also use newspapers, direct mail or broadcast media, you may not reach those people with your message.
                                        </p>
                                </tr>
                                <tr>
                                    <th>WebSite Cost</th>
                                    <img class="LoggedImage" src="https://cdn2.iconfinder.com/data/icons/cyber-crime-15/750/Atom_nucleus_science-512.png" />
                                    <p>
                                        Websites save organizations money, but also come with costs, both in time and money. Most businesses and organizations opt to purchase a specific domain name, rather
                                          than operating under the domain name of a free website and hosting service. Like other visual mediums, effective websites require some design work, which means either
                                         hiring a web designer or handling design in-house. The first option costs money. The second option requires time and energy away from other organizational concerns.
                                         Content development takes time, if handled in-house, or costs money for a third party to write. There are also recurring website hosting fees, annual renewal of domain
                                         names and the electronics and software needed to manage the site.
                                        </p>
                                </tr>
                                <tr>
                                    <th>Availability</th>
                                    <img class="LoggedImage" src="https://cdn2.iconfinder.com/data/icons/cyber-crime-15/750/Atom_nucleus_science-512.png" />
                                    <p>
                                        Barring a power outage or technical failure, websites never stop working. This means a company can take orders at all hours any day of the week. This also opens up foreign markets without
                                          requiring a company to operate beyond normal business hours in its home region. Information seekers do not need to wait for a library to open to access materials if they exist in a digital
                                         format. Web site can be updated any time it's needed, enabling people with day jobs to run online businesses in their off hours.
                                        </p>
                                </tr>
                            </tbody>
                        </table>
                        <br></br>
                        <br></br>
                        <div id="ProjectsTable">
                            <table>
                                <tr class="ProjectsRow">
                                    <tr class="ProjectsRow">
                                        <th>Some of my projects</th>
                                        <td class="ProjectData">
                                            <th>C#</th>
                                            <a href="https://github.com/AaronCrvl?tab=repositories&q=&type=&language=c%23&sort=">
                                                <img src="https://cdn4.iconfinder.com/data/icons/multitouch-gesture-filled-outline/50/Multitouch_Gesture_Filled_outline-58-512.png" alt="View C# Codes" width="50px" height="50px" />
                                            </a>
                                        </td>
                                        <td class="ProjectData">
                                            <th>C++</th>
                                            <a href="https://github.com/AaronCrvl?tab=repositories&q=&type=&language=c%2B%2B&sort=">
                                                <img src="https://cdn4.iconfinder.com/data/icons/multitouch-gesture-filled-outline/50/Multitouch_Gesture_Filled_outline-58-512.png" alt="View C++ Codes" width="50px" height="50px" />
                                            </a>
                                        </td>
                                        <td class="ProjectData">
                                            <th>HTML</th>
                                            <a href="https://github.com/AaronCrvl?tab=repositories&q=&type=&language=html&sort=">
                                                <img src="https://cdn4.iconfinder.com/data/icons/multitouch-gesture-filled-outline/50/Multitouch_Gesture_Filled_outline-58-512.png" alt="View HTML Codes" width="50px" height="50px" />
                                            </a>
                                        </td>
                                    </tr>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}