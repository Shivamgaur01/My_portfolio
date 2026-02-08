import React from 'react'

// rest operator logic function para --> arr, arry destructuring arr, object destructuring ---> objet    

// https://chatgpt.com/c/69870e61-fa28-8323-b1b2-ba0169330662

const Button = ({ classname = "", size = "default", children, href, ...props }) => {
    console.log(props)
    const baseClasses = "relative overflow-hidden rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground font-medium hover:bg-primary/90 shadow-lg shadow-primary/25"

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        default: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-large'
    }

    const classes = `${baseClasses} ${sizeClasses[size]} ${classname}`

    const hrefclass = "flex w-full h-full items-center justify-center"


    if (href) {
        return (
            <button href={href} className={classes} {...props}>
                <a className={hrefclass} href={href}>
                    <span className='relative flex items-center justify-center gap-2'>{children}</span>
                </a>
            </button>
        )
    }
    return (
        <button href={href} className={classes} {...props}>
            <span className='relative flex items-center justify-center gap-2'>{children}</span>
        </button>
    )
}

export default Button
