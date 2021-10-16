import React from 'react'
import { Pie } from 'react-chartjs-2';

const StudentPieChart = () => {

    return (
        <div>
            <div>
                <Pie
                    data={{
                        labels: [ "Karnataka State University", "Indian Institute of Science", "Lovely Professional University", "National Institute of Technology", "Indian Institute of Technology" ],
                        datasets: [
                            {
                                labels: 'Students',
                                data: [6, 4, 5, 6, 4],
                                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#113CFC']
                            }
                        ]
                    }}
                    width={400}
                    height={400}
                    options={{
                        maintainAspectRatio: false,
                    }}
                />
            </div>
        </div>
    )
}

export default StudentPieChart