import React from 'react'
import './Repositories.css'
import Repository from './Repository'
import { useStateValue } from './StateProvider';

function Repositories() {

    const [{ userRepos }, dispatch] = useStateValue();

    return (
        <div className="repositories">
            <hr class="light"></hr>

            {userRepos.length === 0 ? (
                <div>
                    <div>No repositories</div>
                </div>

            ) : (
                    <div>
                        {userRepos.map(item => (
                            <Repository
                            name={item.name}
                            html_url={item.html_url}
                            description={item.description}
                            updated_at={item.updated_at}
                            />
                        ))}
                    </div>
                )}
        </div>
    )
}

export default Repositories
