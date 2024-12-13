import React, { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/atom-one-dark.css"; // Importing the dark theme
import style from './styles.module.scss'; // Import your custom CSS

export const RenderAnswer = ({ content, isLoading }) => {
    const codeRef = useRef(null);
    const [copied, setCopied] = useState(false);

    const extractTextContent = (children) => {
        if (!children) return children;

        if (typeof children === 'string') {
            return children;
        }
    
        if (Array.isArray(children)) {
            return children.map(child => {
                if (typeof child === 'string') {
                    return child;
                } else if (child.props && child.props.children) {
                    return extractTextContent(child.props.children);
                } else {
                    return '';
                }
            }).join('');
        }
    
        if (children.props && children.props.children) {
            return extractTextContent(children.props.children);
        }
    
        return '';
    };

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code)
            .then(() => {
                setCopied(true);
                // console.log('Code copied to clipboard!');
                setTimeout(() => {
                    setCopied(false);
                }, 2000)
            })
            .catch(err => {
                alert('Failed to copy code!');
            });
    };

    return (
        <>
        <ReactMarkdown
            className={style.markdownContent}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={{
                code({ node, inline, className, children, ...props }) {
                    const codeContent = String(extractTextContent(children)).trim();
                    const isTypescript = node.properties?.className?.[0] == "hljs" ? true : false;

                    return !inline && isTypescript ? (
                        <div className={style.codeBlock}>
                            <div className={style.codeHeader}>
                                <span></span>
                                <button onClick={() => handleCopy(codeContent)} className={style.copyButton}>
                                    {copied ? "Copied" : "Copy"}
                                </button>
                            </div>
                            <pre {...props} ref={codeRef}>
                                <code className={className}>
                                    {children}
                                </code>
                            </pre>
                        </div>
                    ) : (
                        <code className={"filename"} {...props}>
                            {children}
                        </code>
                    );
                },
                inlineCode({ node, className, children, ...props }) {
                    if (children[0].startsWith('File: ')) {
                        return (
                            <div className={style.fileName}>
                                {children}
                            </div>
                        );
                    }
                    return (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    );
                }
            }}
        >
            {content}
        </ReactMarkdown>
        {isLoading && content.length > 0 && <div className={style.cursor}>O</div>}
        </>
    );
};