import React from 'react'
export default function Footer() {
    return (
        <div>
            <div>Copyright © SSUPAT {new Date().toLocaleString('en-US', { year: 'numeric' })}</div>
        </div>
    )
}