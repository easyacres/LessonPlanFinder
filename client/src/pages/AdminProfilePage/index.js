import React from "react"
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