import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navigate, NavLink, Switch } from "react-router-dom"
import { Button, Card, Tab, Sonnet } from "react-bootstrap"
import "./AdminProfilePage.css"
import ProfileCard from "../../components/ProfileCard";

function AdminProfilePage() {
    return (
        <section id="admin">
            <div id="adminlayer">
                <div class="container" id="admin-container">
                    <div class="row">
                        <div class="column" class="col-md-4">
                            <ProfileCard />
                        </div>

                        <div class="column" class="col-md-8">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminProfilePage