import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";

// 해당 아이디로 상품 수정
const UpdateProduct = () => {
    const {id} = useParams();

    const [formData, setFormData] = useState({
        productName: "",
        price: "",
        description: ""
    })

    const { productName, price, description } = formData;
    const navigate = useNavigate();

    // 수정할 상품 가져오기
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await api.get(`/products/${id}`);
                setFormData ({
                    // 필드 속성(name): value(db의 칼럼값)
                    productName: response.data.product_name,
                    price: response.data.price,
                    description: response.data.description
                })
            } catch (error) {
                console.log(error);
                
                alert("상품 조회중 에러가 발생했습니다.", error);
            }
        } // fetchProduct ()닫기
        fetchProduct();
    }, [id]);

    // 입력값 변경 핸들러
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }

    // 폼 처리 제출 핸들러
    const handleSubmit = async(e) => {
        e.preventDefault();

        // 수정된 데이터를 서버로 보내기
        try {
            await api.put(`/products/${id}`, formData);
            alert("상품이 성공적으로 수정되었습니다.");
            navigate(`/products/${id}`); // 상세 페이지로 이동
        } catch (error) {
            console.log(error);
            
            alert("상품 수정 중 오류가 발생했습니다.", error);
        }
    }

    const handleCancel = () => {
        setFormData({
            productName: "",
            price: "",
            description: ""
        });
    }

    return(
        <div className="update-product">
            <h2>상품 수정</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">상품명</label>
                    <input 
                        type="text" 
                        id="productName"
                        name="productName"
                        value={productName}
                        onChange={handleInputChange}
                        placeholder="상품명을 입력하세요"
                    />
                </div>
                <div>
                    <label htmlFor="price">가격</label>
                    <input 
                        type="number" 
                        id="price"
                        name="price"
                        value={price}
                        onChange={handleInputChange}
                        placeholder="가격을 입력하세요"
                    />
                </div>
                <div>
                    <label htmlFor="description">설명</label>
                    <textarea
                        id="description"
                        name="description"
                        rows={5}
                        value={description}
                        onChange={handleInputChange}
                        placeholder="상품 설명을 입력하세요"
                    />
                </div>
                <div>
                    <button type="submit">등록</button>
                    <button type="button" onClick={handleCancel}>취소</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateProduct;