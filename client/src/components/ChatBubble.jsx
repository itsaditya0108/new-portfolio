/* eslint-disable react/prop-types */
const ChatBubble = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl flex items-center justify-center text-2xl hover:from-blue-600 hover:to-purple-600 transition z-50"
        >
            💬
        </button>
    );
};

export default ChatBubble;
